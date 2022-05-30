import * as React from "react";
import { Fragment } from 'react';
import {
    Button,
    useListContext,
    useUpdateMany,
    useNotify,
    useUnselectAll,
    BulkDeleteButton, BulkExportButton
} from 'react-admin';
import { VisibilityOff } from '@mui/icons-material';

export const CustomUpdatePermissionsButton = () => {
    const { selectedIds } = useListContext();
    const notify = useNotify();
    const unselectAll = useUnselectAll('users');
    const [updateMany, { isLoading }] = useUpdateMany(
        'users',
        { ids: selectedIds, data: { phone: "---" } },
        {
            onSuccess: () => {
                notify('Users permissions updated', { undoable: true }); // display of 'undo' notification
                unselectAll();
            },
            onError: error => notify('Error: users permissions not updated', { type: 'warning' }),
            mutationMode: 'undoable'
        }
    );

    return (
        <Fragment>
        <Button
            label="set permissions"
            disabled={isLoading}
            onClick={updateMany}
        >
            {/* <VisibilityOff /> */}
        </Button>
        <BulkExportButton />
        <BulkDeleteButton />
    </Fragment>
    );
};


export default CustomUpdatePermissionsButton