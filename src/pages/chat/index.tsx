import { useParams } from "@/core/hooks/useParams";
import MockChat from "./_mock";

export default function Chat() {
  const { getQuery } = useParams()

  if(getQuery("mock") === "true") {
    return <MockChat />
  }

  return (
    <>
      hehe
    </>
  );
}