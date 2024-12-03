import { useQuery } from "@tanstack/react-query";
import { useFilters } from "~/Providers/store/useFilters";
import { categoryService } from "~/shared/service/category";

import { Skeleton } from "~/shared/ui";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/shared/ui/select";

const CategoryFilters = () => {
  const setColorFilter = useFilters((state) => state.changeCategory);
  const { data, isLoading, isSuccess, isError } = useQuery({
    ...categoryService.allCategoryQueryOptions(),
  });

  if (isLoading || isError) {
    return <Skeleton className="w-[180px] h-6 rounded-md" />;
  }

  return (
    <Select onValueChange={(value) => setColorFilter(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Категории" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="w-full">
          {isSuccess &&
            data?.__typename === "CategoryGetAllOk" &&
            data?.category?.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.title}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategoryFilters;
