// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  console.log(req.body);
  
  res.setHeader('Set-Cookie','areyouloggedin=true;')
  res.json({status : 'ok'})
}
