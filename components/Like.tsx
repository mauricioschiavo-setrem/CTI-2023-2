import { ReactNode, useState } from 'react';

export interface LikeProps {
  children: ReactNode;
}

export function Like({ children }: LikeProps) {
  const [isLiked, setIsLiked] = useState(false);

  function AlterarLike() {
    setIsLiked(!isLiked);
  }

  return (
    <div>
      <button onClick={AlterarLike}>
        {isLiked ? <span>❤️</span> : <span>🤍</span>}
        {isLiked ? 'Unlike' : 'Like'}
      </button>
      {children}
    </div>
  );
}
