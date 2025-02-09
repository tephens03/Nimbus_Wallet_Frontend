import Header from "@/components/common/Header";
import Balance from "@/components/common/Balance";
import PageTitle from "@/components/common/PageTitle";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <Header />
      <main className="px-4 md:px-8 lg:px-12 py-4 flex-grow bg-black">
        <PageTitle userFullName={"Gia Bao Tran"} />

        <Balance balance={1000}/>
      </main>
    </div>
  );
}
