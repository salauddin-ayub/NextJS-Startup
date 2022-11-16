import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
// import { getFeaturedEvents } from "../dummy-data";
// import EventList from "../components/events/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log("All-data", featuredEvents);
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
export default HomePage;
