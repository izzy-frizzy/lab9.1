// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

export default function userProfileCard(props: UserProfileCardProps) {
  return (
    <div>
      {props.showEmail}
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
      <p>{props.user.role}</p>
      
    </div>
  );
}
