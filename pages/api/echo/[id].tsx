import { NextApiRequest, NextApiResponse } from "next";

interface MessageNextApiProps extends NextApiRequest {
  query: {
    id?: string;
  };
}

export default function getByID(
  req: MessageNextApiProps,
  res: NextApiResponse
) {
  res.json({ yourId: req.query.id });
}
