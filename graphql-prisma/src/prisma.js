import {
  Prisma
} from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'


const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: 'supersecrethere',
  fragmentReplacements
})

export { prisma as default }

// prisma.exists.Comment({
//   id: "ck083oqz701uk0761ya5lv7q8",
//   author: {
//     name: "Oscar Raymond"
//   }
// }).then((exists) => {
//   console.log(exists)
// })

// const createPostForUser = async (authorId, data) => {
//   const userExists = await prisma.exists.User({
//     id: authorId
//   })

//   if (!userExists) {
//     throw new Error('User not found')
//   }

//   const post = await prisma.mutation.createPost({
//     data: {
//       ...data,
//       author: {
//         connect: {
//           id: authorId
//         }
//       }
//     }
//   }, `{ 
//     author {
//       id
//       name
//       email
//       posts {
//         id
//         title
//         published
//       }
//     } 
//   }`)

//   return post.author
// }

// createPostForUser("ck081s4lq00wb0761mekhigvi", {
//   title: 'Great books to read',
//   body: 'The good life 2',
//   published: true
// }).then((user) => {
//   console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//   console.log(error)
// })

// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({
//     id: postId
//   })

//   if (!postExists) {
//     throw new Error('Post not found')
//   }
//   const post = await prisma.mutation.updatePost({
//     where: {
//       id: postId
//     },
//     data: {
//       ...data
//     }
//   }, `{ 
//     author {
//       id
//       name
//       email
//       posts {
//         id
//         title
//         published
//       }
//     } 
//   }`)

//   return post.author
// }

// updatePostForUser("ck082yw0201cz0761s1sop4vf", {
//   published: true
// }).then((user) => {
//   console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//   console.log(error.message)
// })