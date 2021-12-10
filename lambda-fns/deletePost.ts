import db from './db';

async function deletePost(postId: string) {
  try {
    const query = `DELETE FROM posts WHERE id = :postId`;
    const result = await db.query(query, { postId });
    if (result.numberOfRecordsUpdated === 1) return postId;
    return null;
  } catch (error) {
    console.log('Postgres error: ', error);
    return null;
  }
}

export default deletePost;
