import { useRouter } from "next/router";
function SelectedClientProjectPage() {
  const router = useRouter();
  console.log("Dinamic Folder and dynamic ID", router.query);
  return (
    <div>
      <h1>The project page for a Specific Project for a Selected Client</h1>
    </div>
  );
}
export default SelectedClientProjectPage;
