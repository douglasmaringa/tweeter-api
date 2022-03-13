import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold">How could i have made this better</h2>

          <p>
            The api is allowing 10 tweets per request so i could load all the tweets to a database where i can then rank the best out of all the tweets instead of just 10
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">Extensive Testing</h2>
          <p>
          I could have tested the app more , tested using popular tweeter accounts joeBiden , elonMusk etc need to test more how it behaves for other users
          </p>
        </section>
      </div>

      <Image
        alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
        src="/critter.svg"
        width={476}
        height={297.17}
      />
    </div>
  );
}
