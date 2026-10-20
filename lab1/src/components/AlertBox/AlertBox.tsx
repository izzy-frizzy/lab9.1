// types/index.ts
export type AlertType = 'success' | 'error' | 'warning' | 'info';
 
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function AlertBox (prop:AlertBoxProps){
    return(
        <div className = {prop.type}>
        
        <h1 className={prop.type}>

        {prop.message}
        </h1>
        {prop.children}
        {prop.onClose && (
          <button
            onClick={prop.onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        )}

        </div>
        
    )
}