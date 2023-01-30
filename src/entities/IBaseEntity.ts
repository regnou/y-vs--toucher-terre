import type { FieldValue } from 'firebase/firestore';

export interface IBaseEntity {
	id: string;
	created_at: FieldValue;
	updated_at: FieldValue;
}
