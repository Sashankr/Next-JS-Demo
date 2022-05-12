// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

const KEY = 'asfajdajsdiasuruiiqwevbasbdhasdsdgvsdf'

export default function handler(req:NextApiRequest, res:NextApiResponse) {
 
  if(!req.body){
    res.statusCode = 404;
    res.end('Error');
    return
  }

  const {username,password} = req.body;
  
  res.setHeader('Set-Cookie','areyouloggedin=true;')
  res.json({
    token : jwt.sign({
      username,
      admin : username === 'admin' && password === 'admin'
    },KEY)
  })
}
