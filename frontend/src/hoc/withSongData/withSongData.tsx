import React from "react";
import { ErrorMessage } from "@/components/Helper Components";
import { useMusicStore } from "@/store";
import type { InjectedSongsProps, WithSongDataOptions } from "@/types/interfaces/hoc/hocInterface";


function withSongData<T, P extends InjectedSongsProps<T>>(
  WrappedComponent: React.ComponentType<P>,
  { songsType, skeleton: SkeletonComponent }: WithSongDataOptions
) {
  return function WithSongData(
    props: Omit<P, keyof InjectedSongsProps<T>>
  ) {
    const store = useMusicStore();
    const { isLoading, error } = store;

    const songs = store[songsType] as T[];

    if (isLoading) {
      return <SkeletonComponent />;
    }

    if (error) {
      return <ErrorMessage message={error} />;
    }

    return (
      <WrappedComponent
        {...(props as P)}
        songs={songs}
      />
    );
  };
}


export default withSongData;
