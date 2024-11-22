import SearchForm from "@/components/SearchForm"
import StartupCard from "@/components/StartupCard"
import { title } from "process"

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query
  
  const posts = [
    {
      _createdAt: new Date,
      views: 55,
      author: { _id: 1, name:"Adrian" },
      _id: 1,
      description: "This is a description",
      image: "https://plus.unsplash.com/premium_photo-1730980474802-28f5fb1e10f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
      category: "Robots",
      title:"We Robots"

    }
  ]
    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch Your Startup, <br />
                    Connect With Entrepreneurs
                </h1>

                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competetions.
                </p>
                <SearchForm query={query} />
        </section>
        
        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search Results for "${query}"` : "All Startups"}
          </p>
          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post:StartupCardType, index:number) => (
                <StartupCard key={ post?._id} post={post} />
              ))
            ) : (
                <p className="no-results">No startups found</p>
            )}
          </ul>
        </section>
        </>
    )
}
