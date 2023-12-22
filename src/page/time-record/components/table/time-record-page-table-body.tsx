import { FunctionComponent } from 'react';

import { TableBody, TableRow } from '@mui/material';
import { layoutStore, timeRecordLayoutStore, timeRecordStore } from '@store';
import { TableValueCell } from '@component';

export const TimeRecordPageTableBody: FunctionComponent = () => {
  const { theme } = layoutStore.useValue();
  const backgroundColor = theme === 'dark' ? '#222222' : '#ffffff';

  const { project, date } = timeRecordLayoutStore.useValue();
  const { rows } = timeRecordStore.useValue();

  return (
    <TableBody>
      {project.rows.map((project, i) => (
        <>
          <TableRow>
            <TableValueCell
              component="th"
              value={project.name}
              rowSpan={project.category.children.length + 1}
              sx={{
                position: 'sticky',
                zIndex: 1.5,
                left: 0,
                width: 200,
                minWidth: 200,
                maxWidth: 200,
                textWrap: 'wrap',
                backgroundColor,
              }}
            />
            <TableValueCell
              value={project.code}
              rowSpan={project.category.children.length + 1}
              sx={{
                position: 'sticky',
                zIndex: 1.5,
                left: 200,
                width: 100,
                minWidth: 100,
                maxWidth: 100,
                backgroundColor,
              }}
            />
            <TableValueCell
              value={project.category.name}
              rowSpan={project.category.children.length + 1}
              sx={{
                position: 'sticky',
                zIndex: 1.5,
                left: 300,
                width: 100,
                minWidth: 100,
                maxWidth: 100,
                backgroundColor,
              }}
            />
          </TableRow>
          {project.category.children.map((child) => (
            <TableRow>
              <TableValueCell
                value={child.name}
                sx={{
                  position: 'sticky',
                  zIndex: 1.5,
                  left: 400,
                  width: 100,
                  minWidth: 100,
                  maxWidth: 100,
                  backgroundColor,
                }}
              />
              {date.rows.map((date, i) => (
                <TableValueCell
                  value={
                    rows.find(
                      (row) =>
                        row.project === project.id &&
                        row.category.parent === project.category.id &&
                        row.category.child === child.id &&
                        row.date === date.date,
                    )?.time
                  }
                />
              ))}
            </TableRow>
          ))}
        </>
      ))}
    </TableBody>
  );
};

// export const TimeRecordPageTableBody: FunctionComponent = () => {
//   const { project, date } = timeRecordLayoutStore.useValue();
//   const { rows } = timeRecordStore.useValue();

//   return (
//     <TableBody>
//       {project.rows.map((project, i) => (
//         <>
//           <TableRow>
//             <TableValueCell value={project.name} rowSpan={project.category.children.length} />
//             <TableValueCell value={project.code} rowSpan={project.category.children.length} />
//             <TableValueCell value={project.category.name} rowSpan={project.category.children.length} />
//           </TableRow>
//           {project.category.children.map((child) => (
//             <TableRow>
//               <TableValueCell value={child.name} />
//               {date.rows.map((date, i) => (
//                 <TableValueCell
//                   value={
//                     rows.find(
//                       (row) =>
//                         row.project === project.id &&
//                         row.category.parent === project.category.id &&
//                         row.category.child === child.id &&
//                         row.date === date.date,
//                     )?.time
//                   }
//                 />
//               ))}
//             </TableRow>
//           ))}
//         </>
//       ))}
//     </TableBody>
//   );
// };
