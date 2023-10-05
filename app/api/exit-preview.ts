import type { NextApiRequest, NextApiResponse } from "next";

export default function exit(req: NextApiRequest, res: NextApiResponse) {
  res.setDraftMode({ enable: true });
  res.clearPreviewData();
  res.writeHead(307, { Location: "/" });
  res.end();
}
