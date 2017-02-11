/*

USER COLLECTION
{
  email: String,
  password: String,
  _id: ObjectId
}

POLLS COLLECTION
{
  _id: ObjectId,
  title: String,
  user: user._id,
  options: Array of Objects,
    {
      title: String,
      votes: Integer
    },
  voters: [user._id, user._id, user._id, 'IP', 'IP']
}

if unauth then post as normal
if auth check if current user is in voters array
  if yes, display 'you have already voted!',
  if no, continue

*/
