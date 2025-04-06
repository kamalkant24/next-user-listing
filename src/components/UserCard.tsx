import { User } from '@/types/user';
import Image from 'next/image';

export default function UserCard({ user }: { user: User }) {
  return (
    <li 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
      tabIndex={0}
    >
      <div className="flex items-center gap-4">
        <Image
          src={user.image}
          alt={`Portrait of ${user.name}`}
          width={80}
          height={80}
          className="rounded-full"
          loading="lazy"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
          <p className="text-gray-600 mt-2">{user.description}</p>
        </div>
      </div>
    </li>
  );
}
