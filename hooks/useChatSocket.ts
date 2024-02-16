import { useSocket } from "@/components/providers/SocketProvider";
import { Message, Profile, Member } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

type Props = {
  addKey: string;
  updateKey: string;
  queryKey: string;
};

type MessageWithMemberWithprofile = Message & {
  member: Member & {
    profile: Profile;
  };
};

export const useChatSocket = ({ addKey, updateKey, queryKey }: Props) => {
  const { socket } = useSocket();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on(updateKey, (message: MessageWithMemberWithprofile) => {
      queryClient.setQueryData([queryKey], (oldData: any) => {
        if (!oldData || !oldData.pages || oldData.pages.length === 0) {
          return oldData;
        }

        const newData = oldData.pages.map((page: any) => {
          return {
            ...page,
            items: page.items.map((item: MessageWithMemberWithprofile) => {
              if (item.id === message.id) {
                return message;
              }

              return item;
            }),
          };
        });

        return {
          ...oldData,
          pages: newData,
        };
      });
    });

    socket.on(addKey, (message: MessageWithMemberWithprofile) => {
      queryClient.setQueryData([queryKey], (oldData: any) => {
        if (!oldData || !oldData.pages || oldData.pages.length === 0) {
          return {
            pages: [
              {
                items: [message],
              },
            ],
          };
        }

        const newData = [...oldData.pages];

        newData[0] = {
          ...newData[0],
          items: [message, ...newData[0].items],
        };

        return {
          ...oldData,
          pages: newData,
        };
      });
    });

    return () => {
      socket.off(addKey);
      socket.off(updateKey);
    };
  }, [queryClient, addKey, queryKey, updateKey, socket]);
};
