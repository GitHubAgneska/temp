import * as React from "react";
import { 
    FilterButton,
    FilterForm,
    Datagrid,
    ListBase,
    TextField,
    EmailField,
    TextInput,
    /* CreateButton, */
    Pagination,
    SortButton,
    ShowButton
} from 'react-admin';

import { Stack } from '@mui/material';
import { CustomUpdatePermissionsButton } from './CustomUpdatePermissionsButton'
import { ChipField, SingleFieldList, ReferenceManyField } from 'react-admin';

const usersFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Company" source="title" defaultValue="company" />,
];

const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={usersFilters} />
        <div>
            <SortButton
                fields={['lastName', 'company', 'contract']}
            />
            <FilterButton filters={usersFilters} />
            {/* <CreateButton /> */}
        </div>
    </Stack>
)

export const UserList = () => (
    <ListBase>
        <ListToolbar />

        <Datagrid
            optimized  // perf
            rowClick="expand"
            bulkActionButtons={<CustomUpdatePermissionsButton/>}
        >
             {/* using db.json */}
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="company.name" />
            <EmailField source="email" />
            {/* <TextField source="address.street" /> */}
            <TextField source="nation" />
            <TextField source="region" />

            {/* using jsonplaceholder */}
            {/* <ChipField source="id" />
            <TextField source="name" />
            <TextField source="company.name" />
            <TextField source="website" />
            <EmailField source="email" />
            <TextField source="phone" /> */}

            <ChipField source="id" />

            <ShowButton label="View" />
        </Datagrid>
        <Pagination />
    </ListBase>
);

export default UserList