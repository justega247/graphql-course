import jwt from 'jsonwebtoken'

const getUserId = (request, requireAuth = true) => {
  // for queries and mutations, the auth header lives on the request.request object
  // but for subscriptions it lives on the request.connection object
  const header = request.request ? request.request.headers.authorization : request.connection.context.Authorization

  if (header) {
    const token = header.replace('Bearer ', '')
    const decoded = jwt.verify(token, 'bigsecret')

    return decoded.userId
  }

  if (requireAuth) {
    throw new Error('Authentication required')
  }

  return null
}

export { getUserId as default }