x = [1, 2, 3]
y = ["a", "b", "c"]
z = x + y
puts z.inspect

command = "Stop"
    
case command
when "Go"
  puts "Going"
when "Wait"
  puts "Waiting"
when "Turn"
  puts "Turning"
when "Stop"
  puts "Stopping"
else
  puts "I can't understand that."
end