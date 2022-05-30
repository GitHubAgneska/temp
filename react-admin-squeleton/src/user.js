import * as React from "react";
import { useQuery, useMutation } from 'react-query';
import { useDataProvider, Loading, Error } from 'react-admin';
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    RichTextField,
    EmailField,
    TabbedShowLayout,
    Tab,
    EditButton,
    CreateButton,
    ArrayField
} from 'react-admin';
import { useUpdate, Button, useGetOne } from 'react-admin';
import { SelectArrayInput } from 'react-admin';

import { ChipField, SingleFieldList, ReferenceManyField } from 'react-admin';
import { Divider } from '@mui/material';
import { ContractCreate } from './NewContract';

const Permissions = () => {
    // const record = useRecordContext();
    return <span>-----</span>;
};


export const UserProfile = ({ record }) => {

    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="firstName" />
                <TextField source="lastName" />
                <TextField source="company.name" />
            </SimpleShowLayout>
            
           {/*  <CreateButton label="Create contract" /* resource="new-contract" actions={<ContractCreate />} */ /> */}
            
            <TabbedShowLayout divider={<Divider flexItem />} spacing={2}>
                <Tab label="general">
                    {/* <TextField label="Id" source="id" /> */}
                    <TextField source="firstName" />
                    <TextField source="lastName" />
                    <TextField source="phone" />
                    <EmailField source="email" />
                    <EditButton label="Edit info" />
                </Tab>
                <Tab label="contract">
                    <TextField source="contract.id" />
                    <TextField source="contract.type" />
                    <TextField source="contract.issued" />
                    <TextField source="contract.lastModified" />
                    <EditButton label="Edit contract" />
                </Tab>
                <Tab label="permissions">
                    
                    <ArrayField source="permissions.types">
                        <SingleFieldList>
                            <ChipField source="name" />
                        </SingleFieldList>
                    </ArrayField>

                    <TextField source="permissions.issuedBy" />
                    <TextField source="permissions.lastModified" />
                    <EditButton label="Edit permissions" />
                </Tab>
            </TabbedShowLayout>
        </Show>
        );
};


export default UserProfile