import { useQuery } from '@tanstack/react-query';

const useInstructors = () => {
    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructor'],
        queryFn: async() => {
            const res = await fetch('https://last-assignment-server-iota.vercel.app/users/instructor');
            return res.json();
        }
    })
    return [instructors, loading, refetch]

    
};

export default useInstructors;