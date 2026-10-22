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

export default function UserProfileCard(props: UserProfileCardProps) {

  return (
     <div className="card">
      {props.user.avatarUrl && (
        <img src={props.user.avatarUrl} alt={`${props.user.name}'s avatar`} />
      )}

      <h1>{props.user.name}</h1>

      {props.showEmail && <p>{props.user.email}</p>}
      {props.showRole && <p>{props.user.role}</p>}

      {props.onEdit && (
        <button type="button" onClick={() => props.onEdit?.(props.user.id)}>
          Edit
        </button>
      )}

      {props.children}
    </div>
   
  );
}
