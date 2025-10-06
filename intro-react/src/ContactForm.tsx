import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";

export function ContactForm() {
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
  return (
    <Stack gap={2}>
      <Stack direction="row" gap={2}>
        <TextField id="first-name" label="First Name" variant="outlined" />
        <TextField id="last-name" label="Last Name" variant="outlined" />
      </Stack>
      <Stack gap={2}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <b>Gender</b>
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <Box sx={{ width: 240 }}>
          <FormControl fullWidth>
            <InputLabel id="preferred-langauge">Preferred Language</InputLabel>
            <Select
              labelId="preferred-langauge"
              id="preferred-language-select"
              value={language}
              label="language"
              onChange={handleLanguageChange}
            >
              <MenuItem value={10}>English</MenuItem>
              <MenuItem value={20}>Twi</MenuItem>
              <MenuItem value={30}>West African Pidgin</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 420, mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="country">Country</InputLabel>
            <Select
              labelId="country"
              id="country-select"
              value={country}
              label="country"
              onChange={handleCountryChange}
            >
              <MenuItem value={10}>United Kingdom</MenuItem>
              <MenuItem value={20}>Ghana</MenuItem>
              <MenuItem value={30}>Nigeria</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          id="address"
          label="Full Physical Address"
          multiline
          minRows={5}
          sx={{ mt: 2 }}
        />
        <Box sx={{ width: 420 }}>
          <FormControl fullWidth>
            <InputLabel id="email-label">Email Address</InputLabel>
            <Select labelId="email-label" id="email-select">
              <MenuItem value="example1@example.com">
                example1@example.com
              </MenuItem>
              <MenuItem value="example2@example.com">
                example2@example.com
              </MenuItem>
              <MenuItem value="example3@example.com">
                example3@example.com
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* country code */}
        <Box sx={{ width: 420, mt: 2 }}>
          {/* country code */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="country-code-label">Country Code</InputLabel>
            <Select
              label="country-code-label"
              id="country-code"
              defaultValue=""
            >
              <MenuItem value="+1">United States (+1)</MenuItem>
              <MenuItem value="+44">United Kingdom (+44)</MenuItem>
              <MenuItem value="+61">Australia (+61)</MenuItem>
              <MenuItem value="+61">Australia (+61)</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Phone Number */}
        <TextField
          fullWidth
          label="Phone number"
          type="tellephone"
          sx={{ mb: 2 }}
        />
        {/* Day */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="day-label">Day (Optional)</InputLabel>
          <Select label="day-label" id="day" defaultValue="">
            <MenuItem value="Monday">Monday</MenuItem>
            <MenuItem value="Tuesday">Tuesday</MenuItem>
            <MenuItem value="Wednesday">Wednesday</MenuItem>
            <MenuItem value="Thursday">Thursday</MenuItem>
            <MenuItem value="Friday">Friday</MenuItem>
            <MenuItem value="Saturday">Saturday</MenuItem>
            <MenuItem value="Sunday">Sunday</MenuItem>
          </Select>
        </FormControl>
        {/* Time */}
        <TextField
          fullWidth
          label="Time (Optional)"
          type="time"
          placeholder="Select time"
        />
      </Stack>
    </Stack>
  );
}
