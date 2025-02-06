import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"


const initialFriendSuggestions = [
  { friends: "Michael Reynolds" },
  { friends: "Katherine Sinclair" },
  { friends: "Thomas Whitmore" },
  { friends: "Olivia Harrington" },
  { friends: "Benjamin Caldwell" },
];

export function TableDemo() {
  const [time, setTime] = useState(new Date());
  const [friends, setFriends] = useState(initialFriendSuggestions);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRemove = (friendName: string) => {
    setFriends((prevFriends) =>
      prevFriends.filter((friend) => friend.friends !== friendName)
    );
  };

  const addFriend = (friendName: string) => {
    toast("Friend Request Sent")
    setFriends((prevFriends) =>
      prevFriends.filter((friend) => friend.friends !== friendName)
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Clock Display */}
      <div className="text-2xl font-semibold mt-8">{time.toLocaleTimeString()}</div>
      
      {/* Table - Moved TableCaption Inside Table */}
      <h1>People you may know...</h1>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow></TableRow>
        </TableHeader>
        <TableBody>
          {friends.map((friend) => (
            <TableRow key={friend.friends}>
              <TableCell></TableCell>
              <TableCell className="font-medium text-lg">{friend.friends}</TableCell>
              <TableCell>
                <Button className="group text-sm px-2 py-1 h-auto" onClick={() => addFriend(friend.friends)}>Add friend</Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  className="text-sm px-2 py-1 h-auto"
                  onClick={() => handleRemove(friend.friends)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
