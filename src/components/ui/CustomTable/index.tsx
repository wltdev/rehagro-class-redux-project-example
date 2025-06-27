import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box, styled } from '@mui/material';

type Props<T extends Record<string, any>> = {
    columns: GridColDef[];
    rows: T[];
};

// Styled DataGrid component with enhanced styling for dark theme
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 'none',
    '& .MuiDataGrid-cell': {
        borderColor: theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0'
    },
    '& .MuiDataGrid-columnHeaders': {
        backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
        borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e0e0e0'}`
    },
    '& .MuiDataGrid-virtualScroller': {
        backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff'
    },
    '& .MuiDataGrid-footerContainer': {
        backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e0e0e0'}`
    },
    '& .MuiDataGrid-row:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)'
    },
    '& .MuiTablePagination-root': {
        color: theme.palette.mode === 'dark' ? '#fff' : 'inherit'
    },
    '& .MuiDataGrid-row.Mui-selected': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(144, 202, 249, 0.16)' : 'rgba(25, 118, 210, 0.08)',
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(144, 202, 249, 0.24)' : 'rgba(25, 118, 210, 0.12)'
        }
    }
}));

export const CustomTable = <T extends Record<string, any>>({ columns, rows }: Props<T>) => {
    return (
        <Box sx={{ height: 'auto', width: '100%', overflow: 'hidden' }}>
            <StyledDataGrid
                rows={rows as GridRowsProp}
                columns={columns}
                disableRowSelectionOnClick
                pageSizeOptions={[5, 10, 25]}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 10, page: 0 }
                    }
                }}
                sx={{
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 'bold'
                    }
                }}
                autoHeight
            />
        </Box>
    );
};
