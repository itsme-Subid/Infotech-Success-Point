import { readFile } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    error?: String;
    data?: String | String[];
  }>
) {
  try {
    readFile("./public/courseDetails/courses.json", "utf8", (err, data) => {
      if (!!err) {
        // res.status(500).json({ error: err.message });
        readFile("https://infotech-success-point.vercel.app/courseDetails/courses.json", "utf8", (err, data) => {
          if (!!err) {
            res.status(500).json({ error: err.message });
          } else {
            res.status(200).json({ data });
          }
        });
      } else {
        res.status(200).json(JSON.parse(data));
      }
    });
  } catch (err: unknown) {
    res.status(500).json({ error: (err as Error).message });
  }
}
