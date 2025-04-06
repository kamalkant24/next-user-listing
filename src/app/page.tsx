import { User } from "@/types/user";
import UserCard from "@/components/UserCard";
import { Metadata } from "next";
import Head from "next/head";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { users } = await import("@/public/user.json");
    return {
      title: `User List - ${new Date().toLocaleDateString()}`,
      description: `Browse our community of ${users.length} professionals`,
      openGraph: {
        images: ["/og-image.png"],
      },
    };
  } catch (error) {
    return {
      title: "User List",
      description: "Community of professionals",
      openGraph: {
        images: ["/og-image.png"],
      },
    };
  }
}

export default async function Home() {
  try {
    const { users } = await import("@/public/user.json");

    return (
      <>
        <Head>
          <title>User List</title>
          <meta
            name="description"
            content="List of users with their names and descriptions"
          />
        </Head>
        <main className="min-h-screen bg-gray-200 text-black">
          <div className="container mx-auto px-5">
            <h1 className="text-3xl font-bold py-5">User List</h1>
            <section className="user-listing">
              <div className="overflow-x-auto shadow rounded-xl">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-[15px] font-semi-bold text-dark uppercase tracking-wider"
                      >
                        Avatar
                      </th>
                      <th className="px-6 py-3 text-left text-[15px] font-semi-bold text-dark uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-[15px] font-semi-bold text-dark uppercase tracking-wider"
                      >
                        description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user: User) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={user.image || "/default-avatar.png"}
                                alt={`${user.name}'s avatar`}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  } catch (error) {
    return (
      <main className="min-h-screen bg-gray-50">
        <h2 className="sr-only">User List</h2>
        <section aria-labelledby="user-list-heading">
          <h2 id="user-list-heading" className="text-3xl font-bold p-6">
            Community Members
          </h2>
          <p className="text-lg p-6">Failed to load user data.</p>
        </section>
      </main>
    );
  }
}
