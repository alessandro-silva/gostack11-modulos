import { Response, Request } from 'express';

export default function HelloWord(req: Request, res: Response) {
  return res.json({ message: 'Hello World' });
}
