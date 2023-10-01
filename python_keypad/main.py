# The vscode keypad kinda sucks actually due to the focus stealing behavior when clicking a webview
# maybe python can do better?
# update: nope, we can prevent taking focus, but we cant prevent the target window loosing focus
#         the next step is to listen to  SetWindowsHookExA(WH_CBT,...) the wait for
#         `n_code == HCBT_ACTIVATE` and keep track of the foreground window.
#         the code below almost works... but SetWindowsHookEx is not actually available in this
#         way... sadly hallucinated by chatgpt.

import tkinter as tk
import pyautogui
import win32api
import win32gui
import win32con

class CustomTk(tk.Tk):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # ... [Rest of your initialization code]

        # Variable to store the handle of the last active window
        self.last_active_window = None

        # Set up the hook
        self.hook_proc = self.window_event_handler
        self.hook_id = win32api.SetWindowsHookEx(
            win32con.WH_CBT,
            self.hook_proc,
            None,
            0  # Hooks all threads
        )

    def window_event_handler(self, n_code, wParam, lParam):
        if n_code == win32con.HCBT_ACTIVATE:
            self.last_active_window = win32gui.GetForegroundWindow()
            window_title = win32gui.GetWindowText(self.last_active_window)
            print(f"Now Active Window Title: {window_title}")

        # Call the next hook in the chain
        return win32api.CallNextHookEx(self.hook_id, n_code, wParam, lParam)

    def custom_wnd_proc(self, hwnd, msg, wParam, lParam):
        if msg == WM_MOUSEACTIVATE and self.last_active_window:
            # Get the window title and print it
            window_title = win32gui.GetWindowText(self.last_active_window)
            print(f"Last Active Window Title: {window_title}")

            # Restore focus to the last active window
            win32gui.SetForegroundWindow(self.last_active_window)
            return MA_NOACTIVATE

        return win32gui.CallWindowProc(self.old_wnd_proc, hwnd, msg, wParam, lParam)

    def __del__(self):
        # Unhook when the object is destroyed
        if self.hook_id:
            win32api.UnhookWindowsHookEx(self.hook_id)


# def set_window_focusable(hwnd, should_focus):
#     style = win32gui.GetWindowLong(hwnd, win32con.GWL_EXSTYLE)
#     if should_focus:
#         style &= ~win32con.WS_EX_NOACTIVATE
#     else:
#         style |= win32con.WS_EX_NOACTIVATE
#     win32gui.SetWindowLong(hwnd, win32con.GWL_EXSTYLE, style)

def key_press(key):
    pyautogui.press(key)

root = CustomTk()
root.title("Uiua Keypad")
root.attributes('-topmost', True)
#root.overrideredirect(True)
# root.update_idletasks()
# set_window_focusable(root.winfo_id(), False)

def exit_app():
    root.destroy()

# Define a list of keys
keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['Exit'],
]

# Create buttons for the keys
for row in keys:
    frame = tk.Frame(root)
    frame.pack(pady=5)
    for key in row:
        if key == "Exit":
            button = tk.Button(frame, text=key, width=5, height=2, command=exit_app)
        else:
            button = tk.Button(frame, text=key, width=5, height=2, command=lambda k=key: key_press(k))
        button.pack(side=tk.LEFT, padx=2, pady=2)

root.mainloop()