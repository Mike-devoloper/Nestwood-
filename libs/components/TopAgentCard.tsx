import { Stack } from "@mui/material"
import { REACT_APP_API_URL } from "libs/config";
import { Member } from "libs/types/member/member";

interface TopAgentProps {
    member: Member
}

const TopAgentCard = (props: TopAgentProps) => {
	const {member} = props;
    return (
        <Stack className="top-agent-card">
				<img src={`${REACT_APP_API_URL}/${member.memberImage}`} alt="" />

				<strong>{member.memberNick}</strong>
				<span>{member.memberType}</span>
			</Stack>
    )
}

export default TopAgentCard;