// Scalar types - String, Boolean, Int, Float, ID

// Demo user data
const users = [
  {
    id: '1',
    name: 'Tega',
    email: 'tega@mail.com'
  },
  {
    id: '2',
    name: 'David',
    email: 'fega@mail.com',
    age: 31
  },
  {
    id: '3',
    name: 'Felicia',
    email: 'mega@mail.com'
  },
]

const posts = [
  {
    id: '1',
    title: 'Intro to CS',
    body: 'This is an introduction to CS',
    published: true,
    author: '1'
  },
  {
    id: '2',
    title: 'Hurricane',
    body: 'What you need to know about them',
    published: false,
    author: '1'
  },
  {
    id: '3',
    title: 'Absolution',
    body: 'The path to cleansing your soul',
    published: true,
    author: '2'
  },
]

const comments = [
  {
    id: '1',
    text: 'This post is nice',
    author: '1',
    post: '3'
  },
  {
    id: '2',
    text: 'I like posts like this',
    author: '3',
    post: '2'
  },
  {
    id: '3',
    text: 'I am currently following your posts',
    author: '1',
    post: '2'
  },
  {
    id: '4',
    text: 'You should proofread your work',
    author: '2',
    post: '2'
  },
]

const db = {
  users,
  posts,
  comments
}

export { db as default }