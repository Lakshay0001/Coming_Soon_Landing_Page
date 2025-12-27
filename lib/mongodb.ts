import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

const uri = process.env.MONGODB_URI.trim();
const options = {};

// Quick helper to detect placeholder-like values and give a clearer error
function looksLikePlaceholder(u: string) {
  // contains angle brackets, or a short numeric password placeholder like '123'
  return /<.+>/.test(u) || /:\/\/[^:]+:123@/.test(u) || u.includes(':<')
}

if (looksLikePlaceholder(uri)) {
  throw new Error(
    'The MONGODB_URI in .env.local looks like it contains placeholders. Replace <db_password> with your actual password and remove angle brackets.'
  )
}

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;

async function connectClient() {
  try {
    const c = new MongoClient(uri, options);
    await c.connect();
    return c;
  } catch (err: any) {
    // Give a clearer error when SRV DNS lookup fails (common when URI is wrong)
    if (err && err.code === 'ENOTFOUND') {
      throw new Error(
        `Failed to resolve SRV record for MongoDB host. Check your MONGODB_URI and DNS. Original error: ${err.message}`
      )
    }
    throw err
  }
}

if (process.env.NODE_ENV === 'development') {
  // Use a global to prevent creating new connections during HMR in dev
  const g: any = global as any
  if (!g._mongoClientPromise) {
    g._mongoClientPromise = connectClient();
  }
  clientPromise = g._mongoClientPromise;
} else {
  clientPromise = connectClient();
}

export default clientPromise;