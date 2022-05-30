import * as React from "react";
import {
    Title,
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    required,
    BooleanInput,
    SelectInput
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { Card, CardContent } from '@mui/material';

export const ContractCreate = () => (
    <Card>
        <Title title="Create a new contract" />
            <CardContent>
                <Create>
                    <SimpleForm>

                        <TextInput source="contract.id" validate={[required()]} fullWidth />
                        <TextInput source="contract.type" label="free textfield" />
                        <BooleanInput label="boolean" source="yes" />
                        <SelectInput source="Choose from" choices={[
                            { id: 'choice1', name: 'choice1' },
                            { id: 'choice2', name: 'choice2' },
                            { id: 'choice3', name: 'choice3' },
                        ]} />
                        <DateInput label="Takes effect on" source="contract.issued" defaultValue={new Date()} />

                    </SimpleForm>
                </Create>
            </CardContent>
    </Card>
);

export default ContractCreate;