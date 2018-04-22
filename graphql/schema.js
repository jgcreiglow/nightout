export default `
type User {
  _id: String
  name: String
  email: String
  password: String
  zip: Int
}
type Itinerary {
  _id: String
  name: String
  date: String
  time: String
  activities: [Activity]
}
type Activity {
  name: String
  info: String
  eventLocation: String
  url: String
  startDate: String
  seatMap: String
}
type Restaurant {
  name: String
  location: String
  url: String
  price: String
  phone: String
  coordinates: [Float]
}
type Query {
  yelpSearch(
    search: String
    location: String
  ): [Restaurant]
  eventSearch(
    search: String
    zip: String
  ): [Activity]
  allUsers(
  _id: String
  ): [User!]!,
  getUser(
    _id: String!
  ): User!,
  allItineraries(
    _id: String!
  ): [Itinerary]!,
  getItinerary(
    _id: String!
  ): Itinerary!
}

type Mutation {
  createUser(
    name: String
    email: String
    password: String
    zip: Int
  ): User!,
  createItinerary(
    name: String
    date: String
    time: String
    activities: [String]
  ): Itinerary!
}
`