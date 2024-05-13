import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  handleClick?: () => void;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass} onClick={props.handleClick}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-orange-400;
          }

          .btn-primary:hover {
            @apply bg-orange-300 cursor-pointer;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
