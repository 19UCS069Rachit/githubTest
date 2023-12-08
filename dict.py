import subprocess

# Define the date command
date_command = "echo %DATE% %TIME%"

# Run the command
result = subprocess.run(date_command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

# Print the output
print("Current Date and Time:")
print(result.stdout)

# Print any errors
if result.stderr:
    print("Errors:")
    print(result.stderr)
