import { ChangeEventHandler } from 'react';

export interface SearchBarProps {
	search: string;
	handleSearch: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
