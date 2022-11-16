import { useRouter } from "next/router";
function DynamicID() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>Lets handle route in dynamic way!!!!!!!</h1>
    </div>
  );
}
export default DynamicID;
