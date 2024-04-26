import { cn } from '~/utils';

function Badge(props: React.ComponentProps<'div'>) {
	return <div {...props} className={cn('w-8 h-8 flex items-center justify-center rounded-3xl bg-brand text-background p-2', props.className)}>
		{props.children}
	</div>;
}

export default Badge;