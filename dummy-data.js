const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description: "Everyone can learn to code! Yes,everyone!",
    location: "Somestreet 25, 12345 somewhere",
    date: "2021-05-12",
    image: "images/Coding.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description: "We know networking is no fun if you are an introvert person",
    location: "New wall street 5, 98765 New York",
    date: "2021-05-22",
    image: "images/Coding1.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for introverts blah blah",
    description: "We know Programming is no fun if you are an introvert person",
    location: "New forest street 5, 98765 Washington",
    date: "2021-05-25",
    image: "images/Coding2.jpg",
    isFeatured: true,
  },
];
export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}
