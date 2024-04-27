import { cn } from '~/utils';

function Input(props: React.ComponentProps<'input'>) {
	return <input {...props} className={cn('transition-all w-full rounded-md p-3 border outline-none focus:ring', props.className)} />;
}

export default Input;