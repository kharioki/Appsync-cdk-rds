import db from './db';

async function listPosts() {
  try {
    const result = await db.query('SELECT * FROM posts');
    return result.records;
  } catch (error) {
    console.log('Postgres error: ', error);
    return null;
  }
}

export default listPosts;
