import { Card, CardContent, CustomerName, CustomerDetails } from './styles';
import CheckIcon from '@mui/icons-material/Check';

export type Item = {
    id: string;
    name?: string;
    email?: string;
    title?: string;
    body?: string;
    completed?: boolean;
};

type Props = {
    item: Item;
    onClick?: (item: Item) => void;
};

export const ItemCard = ({ item, onClick }: Props) => {
    return (
        <Card onClick={() => onClick?.(item)}>
            {item.completed && <CheckIcon sx={{ position: 'absolute', top: 8, right: 8 }} color="success" />}
            <CardContent>
                <CustomerName>{item.name || item.title}</CustomerName>
                <CustomerDetails>
                    <p>{item.email || item.body}</p>
                </CustomerDetails>
            </CardContent>
        </Card>
    );
};
