import Link from "next/link";
function ClientHomePage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "min", name: "Manual" },
  ];
  return (
    <div>
      <h1>Client Home Page@!!!!!!</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>

      {/* <ul>
        <li>
          <Link href="/clients/max"> Maximilian</Link>
        </li>
        <li>
          <Link href="/clients/manu"> Manuel</Link>
        </li>
      </ul> */}
    </div>
  );
}
export default ClientHomePage;
