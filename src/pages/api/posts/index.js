
import {posts} from '../../../components/Data/Posts'
export default function handler(req, res) {
    res.status(200).json(posts)
  }