// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// req = リクエストデータ, res = レスポンスデータ
// export default (req, res) => {
// }
export default (req, res) => {
  res.status(200).json({ text: "Hello" });
};
